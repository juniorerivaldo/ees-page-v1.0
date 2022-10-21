<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Home from "./components/Home/Home.svelte";
  import About from "./components/About/About.svelte";
  import Footer from "./components/Footer/Footer.svelte";
</script>

<Router>
  <header>
    <Navbar />
  </header>
  <main>
    <Route path="/">
      <Home />
    </Route>

    <Route>
      <About />
    </Route>
  </main>

  <footer>
    <Footer />
  </footer>
</Router>
