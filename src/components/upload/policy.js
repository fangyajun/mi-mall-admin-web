import http from '@/utils/httpRequest.js'
import ossPolicy from '@/api/upload'
export function policy() {
   return  new Promise((resolve,reject)=>{
        var param = http.adornParams({})
        console.log('参数：' + param)
        ossPolicy.ossPolicy(param).then(res => {
            resolve(res);
        })

        // http({
        //     url: http.adornUrl("/thirdparty/oss/policy"),
        //     method: "get",
        //     params: http.adornParams({})
        // }).then(({ data }) => {
        //     resolve(data);
        // })
    });
}