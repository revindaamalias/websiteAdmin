const db = firebaseApp.firestore();

  // ADD THESE LINES
  if (window.location.hostname === "localhost") {
    console.log("localhost detected!");
    db.settings({
      host: "localhost:8080",
      ssl: false
    });
  }