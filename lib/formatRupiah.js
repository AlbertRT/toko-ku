export function formatRupiah(angka) {
    if (!angka) return "Rp 0"
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    let result = ribuan.join('.').split('').reverse().join('');
    return "Rp " + result;
}
