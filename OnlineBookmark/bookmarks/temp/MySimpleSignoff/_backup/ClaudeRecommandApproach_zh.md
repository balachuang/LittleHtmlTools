推薦實作方案

1. 專案結構與設定

- 套件佈局: com.example.approval
  - .controller: REST 控制器。
  - .service: 業務邏輯 (Approval, User, Log, Config 服務)。
  - .repository: Spring Data JPA 儲存庫。
  - .dto: 請求/回應物件。
  - .entity: JPA 實體。
  - .config: 安全性與應用程式配置。
  - .global.exception: GlobalExceptionHandler 及自定義異常。
  - .global.response: ApiResponse<T> 包裝類。
- 建置工具: Maven，搭配 Java 17 與 Spring Boot 3.x。

2. 領域模型 (實體)

- User: id, username, password, fullName, role。
- ApprovalRequest:
  - id, title, createDate, updateDate, signoffPersons (String, 逗號分隔), mainCategory, subCategory, content, assigneeId, creatorId, currentStep (Open, Approving, Accept, Reject), comment。
- ApprovalLog: id, requestId, operatorId, changeDate, fieldName, oldValue, newValue。
- FieldConfig & StepConfig: 用於持有 XML 定義配置的 POJO。

3. 配置邏輯 (XML)

- 在 src/main/resources/config/ 中建立 XML 檔案:
  - fields.xml: 定義欄位 (ID, 標籤, 類型, 類別選項)。
  - process.xml: 定義步驟與有效的轉換/動作。
- 實作 ConfigurationService，使用 JAXB 或 DOM 在啟動時將其載入記憶體。

4. 業務邏輯 (服務層)

- ApprovalService:
  - createRequest(): 初始化為 Open 步驟，並將 creatorId 設為指派人。
  - sendForApproval(): 從 Open $\rightarrow$ Approving。將第一個簽核人設為指派人。
  - processAction(action):
   - Accept: 若仍有其他簽核人 $\rightarrow$ 下一個人；否則 $\rightarrow$ Accept 步驟，指派人 = 開單者。
   - Reject: 轉換至 Reject 步驟，指派人 = 開單者。
   - Re-Open: 從 Accept/Reject $\rightarrow$ Open，指派人 = 開單者。
- LogService: 通用工具，用於比較實體的新舊狀態並將變更持久化至 ApprovalLog。

5. 安全性與基礎設施

- JWT 身份驗證:
  - JwtTokenProvider: 生成與驗證 Token。
  - JwtAuthenticationFilter: 攔截請求並設定安全性上下文。
  - SecurityConfig: 配置 HTTP 安全性，允許登入匿名存取，其餘需驗證。
- 全域處理:
  - ApiResponse<T>: 包含 code, message, data 的標準包裝類。
  - GlobalExceptionHandler: 使用 @ControllerAdvice 將異常映射至 ApiResponse。

6. API 與前端

- 控制器:
  - AuthController: /api/auth/login。
  - ApprovalController:
   - GET /api/approvals (基於權限的列表)。
   - POST /api/approvals (建立)。
   - POST /api/approvals/{id}/action (處理狀態轉換)。
   - GET /api/approvals/{id} (詳情 + 日誌)。
- Thymeleaf 模板:
  - list.html: 簽核單列表。
  - form.html: 基於 XML 欄位定義的動態表單。
  - detail.html: 查看簽核單、審批歷史/日誌及操作按鈕。

7. 資料庫與測試

- schema.sql: 定義 User, Request 與 Log 表。
- 單元測試: 使用 Mockito 為 ApprovalService 的狀態轉換建立測試。

需建立的關鍵檔案

- pom.xml
- src/main/java/com/example/approval/entity/ApprovalRequest.java
- src/main/java/com/example/approval/service/ApprovalService.java
- src/main/java/com/example/approval/config/SecurityConfig.java
- src/main/resources/config/fields.xml
- src/main/resources/config/process.xml
- src/main/resources/schema.sql
- src/main/resources/templates/*.html

驗證計畫

1. 建置: 執行 `mvn clean compile` 確保無語法錯誤。
2. 啟動: 運行 Spring Boot 應用並驗證 H2 資料庫初始化。
3. 功能測試:
  - 登入 $\rightarrow$ 獲取 JWT。
  - 建立簽核單 $\rightarrow$ 驗證初始狀態為 Open 且指派人為開單者。
  - 送審 $\rightarrow$ 驗證狀態為 Approving 且指派人為第 1 位簽核人。
  - 同意 (最後一人) $\rightarrow$ 驗證狀態為 Accept 且指派人為開單者。
  - 檢查日誌 $\rightarrow$ 驗證所有變更皆記錄了舊值。
4. 單元測試: 執行 `mvn test` 驗證服務邏輯。
