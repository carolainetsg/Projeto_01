import { Conta } from '../model/Conta';
import { colors } from '../util/Colors';
import { ContaRepository } from './../repository/ContaRepository';

export class ContaController implements ContaRepository{

    private ListaContas: Array<Conta>=new Array<Conta>();
    numero: number =0;

    procurarPorNumero(numero: number): void {
        throw new Error('Method not implemented.');
    }
    listarTodas(): void {
        for(let conta of this.ListaContas){
            conta.visualizar();
        };
        throw new Error('Method not implemented.');
    }
    cadastrar(conta: Conta): void {
        this.ListaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: "+conta.numero+  "foi criada com sucesso!", colors.reset);

        throw new Error('Method not implemented.');
    }
    atualizar(conta: Conta): void {
        throw new Error('Method not implemented.');
    }
    deletar(numero: number): void {
        throw new Error('Method not implemented.');
    }
    sacar(numero: number, valor: number): void {
        throw new Error('Method not implemented.');
    }
    depositar(numero: number, valor: number): void {
        throw new Error('Method not implemented.');
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error('Method not implemented.');
    }

    //Métodos Auxiliares
    
    //Gerar Número da Conta 
    public gerarNumero(): number{
        return ++ this.numero;

    }
    
}
   