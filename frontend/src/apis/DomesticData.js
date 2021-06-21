
export default  async function getDomesticData() {
    const url = `http://localhost:3000/korea-data`;

    const {data:{items:{item}}} = await axios.get(url)
    let chartData = []

    for (let i = item.length-1, j = 0; 7 > j; i--) {
        j++;
        let date = item[i].stateDt + "";
        chartData.push({
            name: `${date.substring(0,4)}-${date.substring(4,6)}-${date.substring(6,8)}`,
            "확진자수": item[i].decideCnt
        });
    }
    
    // this.setState({datas :chartData});
    return chartData;
}