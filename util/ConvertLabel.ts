export default function convertLabel(props: any) {
  const text = props.name;
  let words = text.toLowerCase().split("_");
  for (let a = 0; a < words.length; a++) {
    let w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}
