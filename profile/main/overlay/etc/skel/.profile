

################################################################################
##
## ~/.profile
##
################################################################################




################################################################################
### Head: note
##

##
## ~/.profile: executed by the command interpreter for login shells.
## This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
## exists.
## see /usr/share/doc/bash/examples/startup-files for examples.
## the files are located in the bash-doc package.
##

##
### Tail: note
################################################################################




################################################################################
### Head: mask
##

##
## the default umask is set in /etc/profile; for setting the umask
## for ssh logins, install and configure the libpam-umask package.
##

#umask 022

##
### Tail: mask
################################################################################




################################################################################
### Head: bashrc
##

##
## Load ~/.bashrc
##

[ -f ~/.bashrc ] && . ~/.bashrc

##
### Tail: bashrc
################################################################################


################################################################################
### Head: Path
##

##
## Aad [~/bin] and [~/.local/bin] to PATH
##

#PATH="${HOME}/.local/bin:${HOME}/bin:${PATH}"

[ -f ~/.path ] && . ~/.path

##
### Tail: Path
################################################################################
