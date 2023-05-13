export function T_logic(weadet){
    console.log(weadet);
    const D_desc = ['rain','snow']
    let getTClass=[];
    const de_te = [weadet.list[0].weather[0].description, weadet.list[0].main.temp-273.15];
    console.log(de_te[0], de_te[1]);
    for(let j=0;j<3;j++) {
        let i = 0;
        if (de_te[1] < 10) {
            for (; i < D_desc.length; i++) {
                if (de_te[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            console.log(i);
            getTClass.push((i === D_desc.length + 1) ? "A" : "B");//맑음:악천후
        }
        else if (de_te[1] < 24) {
            for (; i < D_desc.length; i++) {
                if (de_te[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            console.log(i);
            getTClass.push((i === D_desc.length + 1) ? "C" : "D");//맑음:악천후
        }
        else {
            for (; i < D_desc.length; i++) {
                if (de_te[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            console.log(i);
            getTClass.push((i === D_desc.length + 1) ? "E" : "F");//맑음:악천후
        }
    }
    console.log(getTClass);
    day_temp = getTClass;
}
//[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]