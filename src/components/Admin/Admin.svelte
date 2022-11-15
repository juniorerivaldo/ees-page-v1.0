<script>
    import { Router, Route, Link } from "svelte-navigator";

  let login, password;
  function acess() {
    if (
      login == import.meta.env.VITE_ADM_LOGIN &&
      password == import.meta.env.VITE_ADM_PASSWORD
    ) {
      console.log("Logado com sucesso");
    } else {
      console.log("Credenciais invalidas");
    }
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              bind:value={login}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              bind:value={password}
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" on:click={acess}>Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
