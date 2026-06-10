
# Nivel 3 - Hardening Inicial do Sistema

O hardening inicial do sistema consiste em conjunto de ações realizadas num de modo a torna-lo mais seguro, forte e menos vunerável a ataques. 

## Serviço Publicado
- Apache2(HTTP/HTTPS)
- Sem Wordpress 
- Sem Nginx

## Riscos do Apache

- Exposição da versão do Apache nos headers HTTP
- Listagem de diretórios activa por omissão
- Módulos desnecessários carregados
- Ficheiro .htacess permite alterações

## Hardening Básico do Sistema

- Abilitar atualização automática do sistema via utilizador root com o comando `apt install unattended-upgrades`
- Depois utilizar o `dpkg-reconfigure --priority=low unattended-upgrades` 
[!atualizações-automaticas](evidencias/update.png)
- Desabilitar login do Root via ficheiro `sudo nano /etc/ssh/sshd_config`
[!root-login](evidencias/root.png)
- Via o mesmo ficheiro podemos alterar a porta do acesso `ssh` de porta 22 por uma outra por exemplo 2222.
[!portas-abertas](evidencias/tlnp.png)
- Configurar o acesso do servidor via **chaves de ssh** gerando uma chave privada e publica para aceder 
o servidor sem prompt de palavra passe por maior questão de segurança. `ssh-keygen -t ed25519 -b 4096`
- Desativar a porta 22 no firewall `sudo ufw deny 22/tcp`


## Medidas para outros tópicos
- Desativar prompt de password nos acessos de todos os utilizadores via `sudo nano /etc/ssh/sshd_config`.
- Configurar o HTTPS com Let's Encrypt
- Instalar Fail2ban
- Configurar ModSecurity
- Fortificar o serviço do apache2
