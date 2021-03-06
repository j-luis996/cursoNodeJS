const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controler');
const multer = require('multer');

const upload = multer({
      dest: 'public/files/',
});

/**para usar la funcion user:
 * http://<IP>/message?user=<ususario_desedo>
 * nos permite filtrar
 * http://<IP>/message
 * lista todos los mensajes
 */
router.get('/', (req, res) => {
      const filterMessage = req.query.user || null;
      controller.list(filterMessage)
      .then((messageList) => {
            response.success(req, res, messageList, 200);
      })
      .catch(e => {
            response.error(req,res, 'Unexpected Error', 500, e);
      })
});

router.post('/',upload.single('file'), (req, res) => {
      controller.add(req.body.chat,req.body.user, req.body.message,req.file)
            .then((fullMessage) => {
                  response.success(req, res, fullMessage, 201);
            })
            .catch(e => {
                  response.error(req, res, 'Informacion invalida',400,e);
            });      
});
router.patch('/:id',(req, res) => {//esta peticion se llama: http://IP:8080/message/ID_USUARIO
      controller.update(req.params.id, req.body.message)
            .then((data) => {
                  response.success(req, res, data, 200);
            })
            .catch(err =>{
                  response.error(req, res, 'Error interno', 500, err);
            });
});
router.delete('/:id', (req,res) => {
      controller.delete(req.params.id)
            .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200))
            .catch(err => response.error(req, res, 'Error interno', 500, err));
});
module.exports = router;