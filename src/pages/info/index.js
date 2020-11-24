import React from "react";
import styled from "styled-components";
import imagem1 from "../../assets/Imagem1.png";

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

const SubTitulo = styled.h3``;
export const Texto = styled.p`
  text-align: justify;
`;

export const ListaItem = styled.li`
  position: relative;
  margin: 10px 0px;
`;
export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  margin: auto;
`;

const Lista = styled.ul`
  list-style-type: ${(props) => (props.order ? "decimal" : "bubble")};
`;
export const Info = () => {
  return (
    <Container>
      <Titulo>Implementação de um cluster</Titulo>

      <Texto>
        Neste guia iremos apresentar as etapas para a criação de um cluster
        HPC(High-performance computing) em 3 nós, o nós principal, usado para
        gerenciar o cluster, o nó de cálculo para a execução das tarefas e o
        adicional atuará como nó de computação
      </Texto>
      <Texto>
        O primeiro passo é o planejamento dos cenários. Os nós estarão
        conectados uns aos outros por redes privadas isoladas, o nó principal
        possui uma conexão de rede adicional à rede corporativa. Quando o
        cluster estiver configurado será possível enviar e monitorar trabalhos
        efetuando login diretamente no nó principal ou conectando-se ao cluster
        a partir de outro computador na rede corporativa.
      </Texto>
      <ImageContainer>
        <Image src={imagem1} />
      </ImageContainer>

      <Titulo>Itens para o projeto:</Titulo>
      <Container>
        <SubTitulo>Hardware</SubTitulo>
        <Lista>
          <ListaItem>
            3 (ou mais) computadores com as seguintes especificações
            recomendadas
            <Lista>
              <ListaItem>
                Processador (baseado em x64): 2 GHz ou mais rápido
              </ListaItem>
              <ListaItem>RAM: 2 GB ou mais</ListaItem>
              <ListaItem>Espaço em disco disponível: 80 GB ou mais</ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>Teclado, monitor e mouse para o nó principal</ListaItem>
          <ListaItem>1 switch para a rede privada</ListaItem>
          <ListaItem>3 ou mais cabos de rede para a rede privada</ListaItem>
          <ListaItem>
            1 placa de interface de rede (NIC) extra para o nó principal
          </ListaItem>
          <ListaItem>
            1 cabo de rede para conectar o nó principal à rede corporativa
          </ListaItem>
        </Lista>
        <SubTitulo>Software</SubTitulo>
        <Lista>
          <ListaItem>
            Mídia de instalação do Microsoft HPC Pack 2008 R2
          </ListaItem>

          <ListaItem>
            Sistema operacional utilizaremos o Windows Server 2008 R2 (US),
            devendo ser instalado em cada nó.
          </ListaItem>
        </Lista>
        <SubTitulo>Configuração do hardware e ingresso em um domínio</SubTitulo>
        <Lista order>
          <ListaItem>
            Insira a NIC extra no servidor escolhido como o nó principal.
          </ListaItem>
          <ListaItem>
            Conecte o novo NIC à rede corporativa. Não conecte a rede privada
            ainda.
          </ListaItem>
          <ListaItem>
            {" "}
            Conecte o nó principal, monitor, teclado e mouse
          </ListaItem>
          <ListaItem>Ligue o nó principal</ListaItem>
          <ListaItem>
            Para nomear as conexões de rede:
            <Lista>
              <ListaItem>Abra o Network and Sharing Center</ListaItem>
              <ListaItem>
                Clique em Change adapter settings. Informações de conexão para
                as duas NICs serão exibidas
              </ListaItem>
              <ListaItem>
                Clique com o botão direito do mouse na conexão que está
                conectada, clique em Rename e digite “Enterprise”
              </ListaItem>
              <ListaItem>Renomeie a outra conexão como “private”</ListaItem>
              <ListaItem>
                Feche o&nbsp;<strong>Network and Sharing Center</strong>.
              </ListaItem>
            </Lista>
            <ListaItem>
              Junte-o ao domínio:
              <Lista>
                <ListaItem>
                  No console de<strong> initial configuration task</strong>,
                  clique em <strong>Provide computer name and domain</strong>.
                </ListaItem>
              </Lista>
            </ListaItem>
          </ListaItem>
        </Lista>
        <SubTitulo>
          Instale o Microsoft HPC Pack 2008 R2 para criar o nó principal
        </SubTitulo>
        <Lista order>
          <ListaItem>
            Faça logon no nó principal com suas credenciais de domínio
          </ListaItem>
          <ListaItem>
            {" "}
            Insira a mídia de instalação do Microsoft HPC Pack 2008 R2 e execute
            a instalação (setup.exe).
          </ListaItem>
          <ListaItem>
            Siga as etapas no assistente de instalação e selecione as seguintes
            opções:
            <Lista>
              <ListaItem>
                Em Select Installation Edition , selecione HPC Pack 2008 R2
                Express ou HPC Pack 2008 R2 Enterprise e HPC Pack 2008 R2 for
                Workstation .
              </ListaItem>
              <ListaItem> Concorde com os termos da licença</ListaItem>
              <ListaItem>
                Em Select Installation Type, selecione Create a new HPC Cluster
                criando um nó principal .
              </ListaItem>
              <ListaItem>
                Nas próximas três telas, aceite os locais de instalação padrão
                dos bancos de dados HPC e do HPC Pack.
              </ListaItem>
              <ListaItem>
                Em Select Method for Updates, selecione Use Microsoft Update.
              </ListaItem>
              <ListaItem>
                Na seção Customer Experience Improvement Program, selecione Yes
                (colaborando na melhoria do produto para futuras versões).
              </ListaItem>
              <ListaItem>
                No final do assistente, clique em Finish. O assistente iniciará
                o HPC Cluster Manager, sendo o console de administração para
                configurar e monitorar seu cluster.
              </ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>
            No HPC Cluster Manager, na Deployment To-do-List, clique em
            Configure your network.
          </ListaItem>
          <ListaItem>
            Na opção Network Configuration Wizard:
            <Lista>
              <ListaItem>
                Na opção Network Topology Selection, o assistente irá reconhecer
                os adaptadores de rede (NIC) instalados e pré-selecionar uma
                topologia mais adequada. Verifique se a seleção ficará conforme
                o esperado (neste guia, criamos um cluster de Topologia 1).
              </ListaItem>
              <ListaItem>
                Em Enterprise Network Adapter Selection, na lista suspensa do
                adaptador de rede, selecione a conexão de rede que nomeou como
                “Enterprise”.
              </ListaItem>
              <ListaItem>
                Em Private Network Adapter Selection, selecione a conexão de
                rede nomeada “Private”.
              </ListaItem>
              <ListaItem>
                Em Private Network Configuration, aceite as configurações
                padrão.
              </ListaItem>
              <ListaItem>
                Na etapa Firewall Setup, aceite as configurações padrão.
              </ListaItem>
              <ListaItem>Clique em Configure</ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>
            Na lista de tarefas (to-do-list), clique em Provide installation
            credentials.
            <Lista>
              <ListaItem>
                Na caixa de diálogo, pode-se informar as mesmas credenciais de
                domínio usadas para unir seu nó principal ao domínio. Quando
                digitar seu nome de usuário, inclua o nome do domínio no
                formulário DOMAIN\User.
              </ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>
            Na lista de tarefas, clique em Configure the naming of new nodes
          </ListaItem>
          <ListaItem>
            Na lista de tarefas, clique em Create a node template:
          </ListaItem>
          <ListaItem>
            Na etapa Create a Node Template Wizard:
            <Lista>
              <ListaItem>
                Na opção Choose Node Template Type, selecione Computer node
                template.
              </ListaItem>
              <ListaItem>
                Na opção Specify Template Name, digite um nome para o modelo.
                Por exemplo, “nós pré-configurados”.
              </ListaItem>
              <ListaItem>
                Na opção Select Deployment Type, selecione Without operating
                system.
              </ListaItem>
              <ListaItem>
                Em Windows Updates, selecione “include” a step in the template
                to download and install updates.
              </ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>Clique em Create</ListaItem>
          <SubTitulo>Pré configuração dos nós de computação</SubTitulo>
          <ListaItem>
            Mude o teclado, monitor e mouse para o nó de computação
          </ListaItem>
          <ListaItem>Faça logon no nó como administrador.</ListaItem>
          <ListaItem>
            No console em Initial configuration task, selecione Enabel remote
            desktop.
          </ListaItem>
          <ListaItem>Renomeie o nó, por exemplo, NODE01.</ListaItem>
          <ListaItem>
            Junte o nó ao domínio e reinicie o computador quando solicitado.
          </ListaItem>
          <ListaItem>
            Faça logon no nó com suas credenciais de domínio.
          </ListaItem>
          <ListaItem>
            Insira a mídia de instalação do Microsoft HPC Pack 2008 R2 e execute
            a instalação (setup.exe).
          </ListaItem>
          <ListaItem>
            Siga as etapas no assistente de instalação e selecione as seguintes
            opções
            <Lista>
              <ListaItem>
                Em Select Installation Edition, selecione HPC Pack 2008 R2
                Express ou HPC Pack 2008 R2 Enterprise e HPC Pack 2008 R2 for
                Workstation.
              </ListaItem>
              <ListaItem>Concorde os termos da licença.</ListaItem>
              <ListaItem>
                Na opção Select installation Type, selecione Join an existing
                HPC cluster by creating a new compute node.
              </ListaItem>
              <ListaItem>
                Em Join Cluster, selecione ou digite o nome escolhido ao seu nó
                principal (por exemplo, “HEADNODE”).
              </ListaItem>
              <ListaItem>
                Na próxima tela, aceite o local de instalação padrão do HPC Pack
              </ListaItem>
              <ListaItem>
                Na opção Select Method of Updates, selecione Use Microsoft
                Update.
              </ListaItem>
              <ListaItem>No final do assistente, clique em Finish</ListaItem>
            </Lista>
          </ListaItem>
        </Lista>
        <SubTitulo>Por fim junte os Clusters</SubTitulo>
        <Lista order>
          <ListaItem>
            Mude o teclado, monitor e mouse para o nó principal.
          </ListaItem>
          <ListaItem>
            {" "}
            No HPC Cluster Manager, clique em Node Management. Seus nós
            pré-configurados aparecem na lista de nós. Neste ponto, os nós têm o
            Node State marcado como Unknown e o Node Health como Unapproved.
          </ListaItem>
          <ListaItem>
            Na lista de nós, selecione os novos nós, clique com o botão direito
            do mouse na seleção e clique em Assign note template.
          </ListaItem>
          <ListaItem>
            Na caixa de diálogo, selecione o modelo de nó que você criou, “Nós
            pré-configurados” e clique em OK .
          </ListaItem>
          <ListaItem>
            Para monitorar o processo de provisionamento:
            <Lista>
              <ListaItem>Selecione um nó na lista de nós.</ListaItem>
              <ListaItem>
                No painel Detalhes, selecione a guia Provisioning. Detalhes de
                provisionamento são exibidos.
              </ListaItem>
            </Lista>
          </ListaItem>
          <ListaItem>
            Quando o fornecimento é concluído, os nós têm o Node State marcado
            como Off-line e o Node Health como OK .
          </ListaItem>
          <ListaItem>
            Selecione todos os nós, clique com o botão direito do mouse em sua
            seleção e clique em Bring On-line.
          </ListaItem>
        </Lista>
      </Container>
    </Container>
  );
};

export default Info;
