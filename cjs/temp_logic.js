let weadet = [];
function T_logic(){
    console.log(weadet);
    const D_desc = ['rain','snow']
    let getTClass=[];
    console.log(weadet[0], weadet[1]);
    for(let j=0;j<3;j++) {
        let i = 0;
        if (weadet[1] < 10) {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            console.log(i);
            getTClass.push((i === D_desc.length + 1) ? "A" : "B");//맑음:악천후
        }
        else if (weadet[1] < 24) {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
                    break;
                }
            }
            console.log(i);
            getTClass.push((i === D_desc.length + 1) ? "C" : "D");//맑음:악천후
        }
        else {
            for (; i < D_desc.length; i++) {
                if (weadet[0].indexOf(D_desc[i]) !== -1) {
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