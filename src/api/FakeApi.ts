function wait(ms: number = 1000): Promise<Response> {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
}
  
const FakeAPI = {
  async healthCheck() {
    await wait();
    const stubCheckHealth = { status: "OK" };
  
    return stubCheckHealth;
  },
};
  
export default FakeAPI;
