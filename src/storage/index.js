/**
 * Storage封装
 */
const STORGAGE_KEY = 'mall';
export default{
    // 存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.getItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORGAGE_KEY,JSON.stringify(val));
        }
    },
    // 获取某一个模块下面的属性值
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORGAGE_KEY) || '{}');
    },
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORGAGE_KEY,JSON.stringify(val));
    }
}