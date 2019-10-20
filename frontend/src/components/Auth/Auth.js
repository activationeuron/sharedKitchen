import React from "react";
import Layout from "../Layout";

function Auth() {
  return (
    <div>
      <Layout>
        <h1>Amit rai</h1>
        <a href="/auth/google">Google</a>
        <a href="/auth/facebook">Facebook</a>
      </Layout>
    </div>
  );
}

export default Auth;
