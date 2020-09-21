import http from '../../resources'

class UtilisateurDataService {
  create(data) {
    return http.post('/utilisateurs/', data);
  }

  find(userId) {
    return http.get(`/utilisateurs/${userId}`);
  }

  update(userId) {
    return http.put(`/utilisateurs/${userId}`);
  }

  delete(userId) {
    return http.delete(`/utilisateurs/${userId}`);
  }

}

export default new UtilisateurDataService();