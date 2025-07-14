import { api } from '../..';
import {
  toastError,
  toastInfo,
  toastSuccess,
} from '../../../../function/notifications';
import { DeleteProps, pageableProps, SubmitProps } from '../../types';
import urls from '../../urls';

async function getItems(params?:pageableProps) {
  return api.get(urls.product.getAll, { params }).then((res) => {
    return res.data;
  });
}
async function submitForm({
  data,
  successCallBack,
  errorCallBack,
}: SubmitProps) {
  if (data?.id) {
    await api
      .patch(urls.product.update.replace('{{id}}', `${data.id}`), data)
      .then(() => {
        if (successCallBack) {
          successCallBack();
        }
        toastSuccess('atualizado com sucesso!');
      })
      .catch(() => {
        if (errorCallBack) {
          errorCallBack();
        }
        toastError('error ocorreu ao atualizar!');
      });
  } else {
    await api
      .post(urls.product.create, data)
      .then(() => {
        if (successCallBack) {
          successCallBack();
        }
        toastSuccess('cadastro realizado com sucesso!');
      })
      .catch(() => {
        if (errorCallBack) {
          errorCallBack();
        }
        toastError('error ocorreu ao cadastrar!');
      });
  }
}
async function deleteItem({id, successCallBack, errorCallBack}:DeleteProps) {
  await api
    .delete(urls.product.delete.replace('{{id}}', `${id}`))
    .then(() => {
      if (successCallBack) {
        successCallBack();
      }
      toastInfo('deletado com sucesso!');
    })
    .catch((err) => {
      if (errorCallBack) {
        errorCallBack();
      }
      toastError('error ocorreu ao deletar!');
    });
}

const productsApi = {
  getItems,
  submitForm,
  deleteItem,
};

export default productsApi;
