我已根據 CLAUDE.md 中的規格生成了簡單簽核系統的完整實作。

  🚀 專案實作摘要

  1. 架構與技術棧

  - 後端: Java 17, Spring Boot 3.2, Spring Data JPA。
  - 安全性: 使用 Spring Security 與 JWT (JSON Web Token) 實現無狀態身份驗證。
  - 前端: 使用 Thymeleaf 模板構建使用者介面。
  - 資料庫: 開發環境配置為 H2 (記憶體內資料庫)，並提供 schema.sql 以確保初始化一致性。
  - 基礎設施:
    - ApiResponse<T>: 標準化 API 回應包裝類。
    - GlobalExceptionHandler: 全域異常處理，統一管理整個應用程式的錯誤。
    - Lombok: 全面使用以減少樣板程式碼。

  2. 關鍵功能實作

  - XML 驅動配置:
    - fields.xml: 定義表單欄位（包含動態類別）。
    - process.xml: 定義狀態機轉換 (Open $\rightarrow$ Approving $\rightarrow$ Accept/Reject)。
    - ConfigurationService: 在啟動時將 XML 載入記憶體中，以實現高性能查詢。
  - 簽核工作流引擎:
    - 實作於 ApprovalService。
    - 順序處理: 自動管理 signoffPersons 列表，在「同意」後將 assigneeId 移動到逗號分隔列表中的下一個人。
    - 狀態控制: 強制執行有效的狀態轉換（例如：僅 Open 狀態的簽核單可送審）。
  - 稽核日誌:
    - LogService 在每次操作前後比較實體狀態。
    - 在 approval_logs 表中記錄操作者、欄位名稱、舊值與新值。

  3. 已開發組件

  - 實體 (Entities): User, ApprovalRequest, ApprovalLog。
  - 服務 (Services): ApprovalService, UserService, LogService, ConfigurationService。
  - 控制器 (Controllers): AuthController (登入/JWT), ApprovalController (工作流管理)。
  - 安全配置: JwtTokenProvider, JwtAuthenticationFilter, SecurityConfig。
  - 使用者介面: list.html, form.html, detail.html (基於 Bootstrap 樣式)。

  🛠 如何運行與測試

  1. 建置: 執行 `mvn clean compile`。
  2. 啟動: 運行 `ApprovalSystemApplication`。
  3. 存取:
    - API/UI: http://localhost:8080
    - H2 Console: http://localhost:8080/h2-console (JDBC URL: jdbc:h2:mem:approvaldb)。
  4. 測試工作流:
    - 以 user1 身份登入並建立簽核單。
    - 設定簽核人 (signoffPersons) 為 manager1,manager2。
    - 點擊 "Send for Approval" $\rightarrow$ 狀態變更為 Approving，指派給 manager1。
    - 以 manager1 身份登入 $\rightarrow$ 點擊 "Accept" $\rightarrow$ 指派給 manager2。
    - 以 manager2 身份登入 $\rightarrow$ 點擊 "Accept" $\rightarrow$ 狀態變更為 Accept，指派回 user1。
    - 在詳情頁面檢查 "Change History" 以查看稽核日誌。


● 我已經完成了登入頁面以及所有頁面的路由實作。以下是具體的操作內容：

  1. 實作 cookie-based JWT 驗證

  由於專案設定為 STATELESS (無狀態)，瀏覽器在跳轉頁面時無法自動發送 Authorization Header。為了讓 Thymeleaf 頁面能正常運作，我修改了 JwtAuthenticationFilter.java：
  - 更新內容：當請求中沒有 Authorization Header 時，系統會自動檢查名為 jwt 的 Cookie。如果 Cookie 中存在有效的 Token，則將其視為驗證通過。

  2. 建立頁面路由控制器 (WebController.java)

  新增了一個 @Controller 負責處理 HTML 頁面的請求對應：
  - GET / $\rightarrow$ 導向 list.html (簽核單列表)
  - GET /login $\rightarrow$ 導向 login.html (登入頁面)
  - GET /form/new $\rightarrow$ 導向 form.html (新增單據)
  - GET /form/edit/{id} $\rightarrow$ 導向 form.html (編輯單據)
  - GET /detail/{id} $\rightarrow$ 導向 detail.html (單據詳情)

  3. 新增登入頁面 (login.html)

  在 src/main/resources/templates 下新增了登入介面：
  - 功能實作：
    - 提供帳號、密碼輸入欄位。
    - 使用 JavaScript fetch 呼叫現有的 /api/auth/login REST API。
    - 登入成功後，將獲取的 JWT Token 儲存至瀏覽器 Cookie (jwt) 中。
    - 自動跳轉至首頁 (/)。

  驗證建議

  您可以按照以下步驟測試：
  1. 啟動應用程式後，在瀏覽器輸入 http://localhost:8080/login。
  2. 輸入正確的帳號密碼。
  3. 確認登入後是否成功跳轉至首頁列表。
  4. 嘗試在不登入的情況下訪問 / 或 /detail/1，確認系統是否正確攔截（應導向登入或顯示 403/401）。