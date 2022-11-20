<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Home from "./components/Home/Home.svelte";
  import Login from "./components/Login/Login.svelte";
  import About from "./components/About/About.svelte";
  import Contato from "./components/Contato/Contato.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import axios from "axios";
  import { onMount } from "svelte";

  onMount(async () => {
    const res = await axios
      .get("http://localhost:3000/users")
      .then(function (response) {
        // handle success
        console.log(response);
      });
  });
</script>

<Router>
  <header>
    <Navbar />
  </header>
  <main>
    <Route path="/">
      <Home />
    </Route>

    <Route path="/About">
      <About />
    </Route>

    <Route path="/Contato">
      <Contato />
    </Route>

    <Route path="/Login">
      <Login />
    </Route>
  </main>

  <footer>
    <Footer />
  </footer>
</Router>
