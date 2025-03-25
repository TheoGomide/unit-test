const { Banco } = require("../src/banco");

describe('Testes da classe Carro', () => {
    let carro;

    beforeEach(() => {
        carro = new Carro('Toyota', 'Corolla', 2020);
    });

test("Validando depósito válido", async () => {
  expect(Banco.depositar(100)).toBeTruthy();
});

test("Validando saque válido", async () => {
  expect(sacar(5)).toBeTruthy();
});

test("Validando saldo válido", async () => {
  expect(obterSaldo()).toBeTruthy();
});

test("Validando historico válido", async () => {
  expect(obterHistorico()).toBeTruthy();
});

test("Validando definir limite de saque válido", async () => {
  expect(definirLimiteDeSaque(500)).toBeTruthy();
});

test("Validando saque válido", async () => {
  expect(verificarLimiteDeSaque(300)).toBeTruthy();
});

test("Validando aplicar juros válido", async () => {
  expect(aplicarJuros(5)).toBeTruthy();
});

test("Validando pagar conta válido", async () => {
  expect(pagarConta(50, "conta teste")).toBeTruthy();
});

test("Validando obter total depositado válido", async () => {
  expect(obterTotalDepositado()).toBeTruthy();
});
});

