export const loadData = async () => {
  try {
    const results = await fetch("http://localhost:7000/api/results", {
      method: "POST",
    });

    if (!results.ok) {
      throw new Error(`HTTP Error: ${results.status}`);
    }

    const data = await results.json();
    let result = data;
    renderData(result);
  } catch (err) {
    console.error("Error: ", err.message);
  }
};

loadData();

const tBody = document.getElementById("tBody");

const renderData = (res) => {
  let trEl = (mat, name, ges, mth, eng, chm, phy, gpa) => {
    return `<tr>
        <td class="matNO">${mat}</td>
        <td>${name}</td>
        <td>${ges}</td>
        <td>${mth}</td>
        <td>${eng}</td>
        <td>${chm}</td>
        <td>${phy}</td>
        <td>${gpa}</td>
      </tr>`;
  };
  tBody.innerHTML = "";
  res.forEach((el) => {
    const renderRow = () => {
      let mat = "";

      if (el.mat.toString().length === 1) mat = `00${el.mat}.`;
      if (el.mat.toString().length === 2) mat = `0${el.mat}.`;

      tBody.innerHTML += trEl(
        mat,
        el.name,
        el.ges.$numberDecimal,
        el.mth.$numberDecimal,
        el.eng.$numberDecimal,
        el.chm.$numberDecimal,
        el.phy.$numberDecimal,
        50
      );
    };
    renderRow();
  });
};
