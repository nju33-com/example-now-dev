export default (_, res) => {
  res.send(process.env.FOO);
}