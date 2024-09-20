import setValue from "@js/SetValue";
import getValue from "@js/GetValue";
import valueExists from "@js/ValueExists"; 

const map = {
    test(){
        return "hello world"
    },
    async set(data){
        const result = await setValue(data.key, data.value);
        return { success: true, result };
    },
    async get(data){
        const result = await getValue(data.key);
        return { success: true, result };
    },
    async exist(data){
        const result = await valueExists(data.key);
        return { success: true, result };
    }
}
export default map;