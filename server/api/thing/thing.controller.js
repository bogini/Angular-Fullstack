export function index(req, res) {
  res.json([{
    _id: '1',
    title: 'Thing 1',
    body: 'I am thing #1',
  }, {
    _id: '2',
    title: 'Thing 2',
    body: 'I am thing #2',
  }]);
}
