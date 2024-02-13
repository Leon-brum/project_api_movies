import app from "./app";
import 'dotenv';

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(
  `Server running in port ${PORT}`
));