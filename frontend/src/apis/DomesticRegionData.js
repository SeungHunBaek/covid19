
export default  async function DomesticRegionData() {
    const url = `http://localhost:3000/korea-data/localStatus`;
 
    const { data } = await axios.get(url)
    return data;
}