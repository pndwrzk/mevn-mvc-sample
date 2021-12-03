<template>
  <div class="container">
    <h3 class="text-center mt-3">Welcome</h3>
    <div class="card mt-3">
      <div class="card-header">
        <h4>Dependencies</h4>
      </div>
      <table class="table text-center table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Version</th>
            <th scope="col">Homepage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Axios</td>
            <td>0.24.0</td>
            <td>
              <a href="https://axios-http.com/">axios-http.com</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>body-parser</td>
            <td>1.19.0</td>
            <td>
              <a href="https://github.com/expressjs/body-parser"
                >github.com/expressjs/body-parser</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>boostrap</td>
            <td>4.6.1</td>
            <td>
              <a
                href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
                >getbootstrap.com</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>core-js</td>
            <td>3.6.5</td>
            <td>
              <a href="https://github.com/zloirock/core-js#readme"
                >github.com/zloirock/core-js</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>cors</td>
            <td>3.8.5</td>
            <td>
              <a href="https://github.com/expressjs/cors#readme"
                >github.com/expressjs/cors</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>express</td>
            <td>4.17.1</td>
            <td>
              <a href="https://expressjs.com/">expressjs.com</a>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>mongoose</td>
            <td>6.0.14</td>
            <td>
              <a href="https://mongoosejs.com/">mongoosejs.com</a>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>vue</td>
            <td>2.6.11</td>
            <td>
              <a href="https://vuejs.org/">vuejs.org</a>
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>vue-axios</td>
            <td>3.4.0</td>
            <td>
              <a href="https://github.com/imcvampire/vue-axios#readme"
                >github.com/imcvampire/vue-axios</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>vue-router</td>
            <td>3.5.5</td>
            <td>
              <a href="https://router.vuejs.org/">router.vuejs.org</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUser();
  },

  methods: {
    getUser() {
      this.axios.get("/api/users").then((responde) => {
        this.users = responde.data;
      });
    },
  },
};
</script>
