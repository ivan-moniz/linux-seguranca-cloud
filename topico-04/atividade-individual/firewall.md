# Nivel 2 - Intermédio Configuração de Firewall 

## Data
$(date +%Y-%m-%d)

## Verificação de estado de UFW. 

Utilizando o comando `sudo ufw status verbose` conseguimos verificar o estado do firewall. 
A imagem abaixo mostra o respetivo estado:
[!firewall](evidencias/firewall.png)

## Regras aplicadas 
- SSH(22/tcp) - acesso remoto
- HTTP(80/tcp) - serviço web
- HTTPS(443/tcp) - aplicado com certificado auto-assinado para testes.

## Permissão de SSH 

De acordo com `sudo ufw status` conseguimos ver que serviços estão ativos.
A imagem abaixo apresenta serviços que se encontram ativos:
[!firewall](evidencias/ufw.png)

## HTTP 

Utilizou-se o comando `sudo ufw allow 80/tcp` permite que o serviço http seja disponibilizado e acessivel via browser. 
Pode-se verificar na seguinte imagem: 
[!site](evidencias/ufw.png)

## HTTPS 
 `sudo a2ensite default-ssl` certificado ssl de encriptação temporário. Auto-assinado para testes. 
[!certificado-ssl-teste](evidencias/cert.png)



