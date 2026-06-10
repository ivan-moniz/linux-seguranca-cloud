# Validação do Firewall

## Data
$(date)

## Ativação SSL Apache

Instalação, ativação de um certificado teste.
`sudo a2enmod ssl`
`sudo a2ensite default-ssl`
`sudo systemctl reload apache2`


## Ativação de Firewall

`sudo ufw enable` - ativação de firewall
`sudo ufw status` - estado do firewall
`sudo ufw allow 443/tcp` - abertura da porta 443 para acesso com a camada de segurança e o certificado ssl.
[!Firewall](evidencias/firewall.png)


## Verificação HTTPS 

- Módulo SSL: ativo(ssl_module)
- porta 443: em uso
- conclusão: regra 443 aplicada

## Teste de acesso web

Utilizou-se o comando `curl -k https://localhost` para verificar teste de acesso ao site web. 
[!imagem-website](evidencias/curl.png)

Prova de funcionamento de website
[!imagem-website](evidencias/http.png)



