export default function copyStringToClipboard(str: string): void {
  navigator.clipboard.writeText(str);
}
