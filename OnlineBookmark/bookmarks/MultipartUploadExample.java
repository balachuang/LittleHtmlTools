import org.apache.http.HttpResponse;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.entity.ContentType;

import java.io.File;
import java.nio.charset.StandardCharsets;

public class MultipartUploadExample {
    public static void main(String[] args) throws Exception {
        // 建立 HTTP Client
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 要送出的 POST 請求
        HttpPost uploadFile = new HttpPost("https://example.com/upload");

        // 建立 multipart 實體
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);

        // 加入文字欄位
        builder.addTextBody("username", "bala", ContentType.TEXT_PLAIN.withCharset(StandardCharsets.UTF_8));

        // 加入檔案欄位
        File file = new File("cat.png");
        builder.addPart("file", new FileBody(file, ContentType.IMAGE_PNG, file.getName()));

        // 加到 POST 請求中
        uploadFile.setEntity(builder.build());

        // 執行請求
        CloseableHttpResponse response = httpClient.execute(uploadFile);

        // 讀取回應
        String result = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
        System.out.println("Response: " + result);

        // 關閉資源
        response.close();
        httpClient.close();
    }
}
