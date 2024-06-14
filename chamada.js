const alunos = ['Adriano Niviski Gomes dos Santos', 'Evely', 'Emilly Priscila Macedo Vieira', 'Felipe de Souza Motta', 'Guilherme de Vito Gebing', 'Henrique Luiz Camilo Pradi', 'Izabella Malucelli', 'Kauã Dhyego Prado França', 'Kauan José Viola Marcelino', 'Lauana da Rosa Quadros', 'Livia Bicalho dos Santos', 'Luan Carlos Moreira', 'Maria Helena dos Santos Mucci Daniel', 'Nicole Gabriele Miranda Lobato', 'Raquel Ester Cruz Pacheco', 'Renato Souza Alves Junior', 'Kauã Moura de Souza', 'Lucas sa Silva Salvador'];
const numeros = [1, 9, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 16, 17, 18, 19, 21, 22];

alunos.splice(1, 1, "Emilly Crianto da Cruz Freire");
numeros.splice(1, 1, 2);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + numeros[i]);
}