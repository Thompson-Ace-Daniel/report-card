const deleteBtn = document.getElementById("deleteBtn");
const matEl = document.querySelectorAll(".matNO");

const toInt = (mat) => parseInt(mat);

matEl.forEach((el) => {
  const id = () => toInt(el.innerHTML);
  const delObj = { mat: id() };

  const deleteOne = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(delObj),
      });

      if (!res.ok) throw new Error(`Error Status: ${res.status}`);

      const data = await res.json();
      console.log("Server: ", data);
      console.log("data sent")
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  el.addEventListener("click", () => {
    console.log("Clicked")
    deleteOne();
  });
});
