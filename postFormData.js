/**
 * formData
 * perfers append over set
 ＊can also append files
 * [FormData.set() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set)
 * [FormData.append() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)
 */

 /**
  * 转成axois用form-data格式，需要注意的是即使再network中request playload是formData，也不一定用这个，需要copy as fetch看看
  * @param string url 
  * @param {*} obj 一层obj,不可嵌套obj，如果是多层，需要对第二层作JSON.stringify
  */
const postFormData = (url, obj)=>{
    // 如果在node中
    // var FormData = require('form-data');
    const bodyFormData = new FormData(); 
    Object.entries(obj).map(([k,v])=>bodyFormData.append(k,v)); 
    return axios(url, { 
        method: 'post', 
        headers: {'Content-Type': 'multipart/form-data' },
        data:data
    })        
}

/**
  * use in angluar > 8, with ob converted to ob.data
  * need IData interface
  */
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export default Myservice{
 constructor(private http: HttpClient) { }
 private postFormData(url, obj: Object): Observable<IData> {
   const formData = new FormData();
   Object.entries(obj).map(([k, v]) => formData.append(k, v));
   return this.http.post(url, formData).pipe(
     map((ob: Observable<ICommonAPI>) => {
       const code = ob['code']
       const info = ob['info']
       console.log(code, info)
       return ob['data']
     })
   );
 }
}
