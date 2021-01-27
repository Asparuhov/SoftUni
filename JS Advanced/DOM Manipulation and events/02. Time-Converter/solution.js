function attachEventsListeners() {
  document.getElementById("daysBtn").addEventListener("click", function () {
    document.getElementById("hours").value = (
      Number(document.getElementById("days").value) * 24
    ).toFixed(2);
    document.getElementById("minutes").value = (
      Number(document.getElementById("days").value) * 1440
    ).toFixed(2);
    document.getElementById("seconds").value = (
      Number(document.getElementById("days").value) * 86400
    ).toFixed(2);
  });
  document.getElementById("minutesBtn").addEventListener("click", function () {
    document.getElementById("days").value = (
      Number(document.getElementById("minutes").value) / 1440
    ).toFixed(2);
    document.getElementById("hours").value = (
      Number(document.getElementById("minutes").value) / 60
    ).toFixed(2);
    document.getElementById("seconds").value = (
      Number(document.getElementById("minutes").value) * 60
    ).toFixed(2);
  });
  document.getElementById("hoursBtn").addEventListener("click", function () {
      document.getElementById("days").value = (
          Number(document.getElementById("hours").value) / 24
    ).toFixed(2);
    document.getElementById("minutes").value = (
      Number(document.getElementById("hours").value) * 60
    ).toFixed(2);
    document.getElementById("seconds").value = (
      Number(document.getElementById("hours").value) * 3600
    ).toFixed(2);
  });
  document.getElementById("secondsBtn").addEventListener("click", function () {
      document.getElementById("hours").value = (
          Number(document.getElementById("seconds").value) / 3600
  ).toFixed(2);
  document.getElementById("minutes").value = (
    Number(document.getElementById("seconds").value) / 60
  ).toFixed(2);
  document.getElementById("days").value = (
    Number(document.getElementById("seconds").value) / 86400
  ).toFixed(2);
});
}
