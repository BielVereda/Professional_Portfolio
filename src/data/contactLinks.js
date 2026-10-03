const gmailComposeParams = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: 'gabrielsantosvereda@gmail.com',
    su: 'Contato pelo portfólio',
    body: 'Olá, Gabriel!\n\nConheci seu portfólio e gostaria de conversar com você sobre [assunto].\n\nVocê teria disponibilidade para falarmos?\n\nObrigado(a),\n[Seu nome]'
});

export const gmailComposeUrl = `https://mail.google.com/mail/?${gmailComposeParams.toString()}`;