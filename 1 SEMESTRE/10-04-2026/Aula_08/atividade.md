STATE
Exemplo no código:
 const [nome, setNome] = useState('');
 const [cliques, setCliques] = useState(0);
 const [temaEscuro, setTemaEscuro] = useState(false);

 Descrição:
 O State é utilizado para armazenar e atualizar dados dentro do componente, funcionando como variáveis que podem mudar durante a execução da aplicação.

 Função técnica:
 O State permite que a interface seja atualizada automaticamente sempre que seus valores são alterados. No código, ele controla o nome, os cliques e o tema da aplicação.



PROPS
Descrição:
 Props são utilizadas para passar dados de um componente para outro.

 Função técnica:
 As Props permitem a comunicação entre componentes, possibilitando que um componente pai envie informações para um componente filho. Elas são somente leitura.



HOOKS
Exemplos:
useState
useEffect

Descrição:
Hooks são funções especiais do React que permitem utilizar recursos avançados em componentes funcionais.

Função técnica:
useState permite criar e controlar estados.
useEffect permite executar ações automaticamente quando o componente carrega ou quando há mudanças.

