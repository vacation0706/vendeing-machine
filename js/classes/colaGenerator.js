class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }

  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (response.ok) {
        // 서버의 응답 코드가 200 ~ 299 일 경우
        return responese.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default ColaGenerator;
