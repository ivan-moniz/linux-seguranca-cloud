# Descrição de serviços 

## Serviço web utilizado

O serviço web utilizado no tópico anterior é o **Apache2**.

## Serviços ativos
De acordo com comando executado `systemcl list-unidts --type=service -- state=running`
Temos cerca de 19 serviços a serem executados no nosso sistema incluindo com o **apache2** que foi instalado.
A maioria dos serviços do sistema operativo em fazem funcionar de forma global o nosso servidor. 

Pode ser confirmado na imagem abaixo:
[!service](evidencias/services.png)

## Portas abertas ou Observadas

- **Porta 80/tcp** - serviços web
- **Porta 2222/tcp** - serviço ssh alterada por questão de segurança
- **Porta 22/tcp** - serviço ssh padrão de se encontra **desligada**.
- **Porta 2048/tcp** - utilizado para teste de mudança de porta ssh mas se encontra **desligada**.

Prova[!ports](evidencias/ports.png)


## Portas Necessárias

De acordo com o meu servidor do momento só necessito de duas seguintes portas essenciais: **80** e **22**.

## Riscos iniciais 
 
- o protocolo `http` na **porta 80** deixa o servidor vurnerável à ataques, pois não tem a camada de encriptação. 
- o `ssh` na **porta 22** apresenta elevado risco de ataques porque é porta padrão de acesso remoto em qualquer servidor.
- acesso remoto ao servidor via `ssh` de ser feita através das **chaves** porque hackers tentarão **brute force** da password.
