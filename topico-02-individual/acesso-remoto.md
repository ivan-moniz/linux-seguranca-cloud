# Acesso remoto por SSH
## O que é SSH?
SSH - Secure Shell e um protocolo de rede utilizado para acessar o seu computador/servidor de forma remota e segura via internet. 

## Que informação seria necessária para aceder a um servidor por SSH?
- **Utilizador:**
- **Endereço IP:**
- **Palavra-passe ou chave:**

## Exemplo de comando de ligação
`ssh root@174.35.0.3`


## Limitação encontrada
Nao encontrei limitacao em conectar com o SSH so tive dificuldades em copiar ficheiros do meu laptop para o servidor via ssh. 
Tambem tive que ir pesquisar para recordar como introduzir ficheiros como imagens com markdown via nano. 

# Acesso remoto por SSH

## Estado do serviço SSH
A imagem a seguir descreve o estado em que se encontra o servico ssh. 
![ssh.png]

## Endereço identificado
Consegui identificar o endereco de ip mas, nao vou disponbiliza-lo no documento por questoes de seguranca. 
Partilharei um endereco que inventado que se encontra em cima `174.35.0.3`.


## Comando de ligação
`ssh user@174.35.0.3`

## Resultado obtido

O resultado obitdo de uma conexao com servidor via ssh varia da seguinte forma:
- *1 vez* solicita o a confirmacao do fingerprint. 
- Depois solicita o password do user em que se fez a solicitacao para conexao. 

## Limitação encontrada
Nao encontrei limitacao em conectar com o SSH so tive dificuldades em copiar ficheiros do meu laptop para o servidor via ssh.
Tambem tive que ir pesquisar para recordar como introduzir ficheiros como imagens com markdown via nano.


# Acesso remoto e chaves SSH

## Diferença entre autenticação por palavra-passe e autenticação por chave
Autenticacao por palavra passe via ssh sempre ira solicitar a palavra ao realizar a autenticacao, ja via chave 
realiza-se a configuracao do processo de autenticacao gerando uma chave publica e privada conectando-os de modo a dar acesso ao especifico.
utilizador. 

## Chave Publica
Contido no ficheiro linode.pub
`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFgucvknEYS1OyP0+zDg+uMrGesJYjRN/kfRTfLFLUDm linode-vps`

## Chave Privada
Nao se pode partilhar por motivos de seguranca.

## Evidência segura
Nao partilhar a chave de seguranca.

## Cuidados de segurança
Nao partilhar a chave privada com ninguem, sempre mante-la bem guardada e privado. 

