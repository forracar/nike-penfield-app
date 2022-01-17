import voucher_codes from "voucher-code-generator";

function generateVoucherCode() {
  return voucher_codes.generate({
    length: 10,
    count: 1,
    charset: voucher_codes.charset("alphanumeric"),
    pattern: "##-##-##-##-##",
  }); 
}

export { generateVoucherCode };
