export function formatDate(data: string) {
  return data.substring(0, 10).split("/").reverse().join("-");
}
