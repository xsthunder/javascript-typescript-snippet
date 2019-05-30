
 /**
  * 转成axois用form-data格式，需要注意的是即使再network中request playload是formData，也不一定用这个，需要copy as fetch看看
  * @param string url 
  * @param {*} obj 一层obj,不可嵌套obj，如果是多层，需要对第二层作JSON.stringify
  * @param instance axios instance
  */
const postFormData = (url, obj, instance)=>{
    const bodyFormData = new FormData(); 
    Object.entries(obj).map(([k,v])=>bodyFormData.set(k,v)); 
    return instance('', { 
        method: 'post', 
        url: url, 
        headers: {'Content-Type': 'multipart/form-data' } 
    })        
}

