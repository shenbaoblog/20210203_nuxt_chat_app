export default async function ({ redirect, app }) {
  // ログイン中だったら
  if(await app.$auth()) {
    redirect('/')
  }
}
