import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  uid: string | null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    console.log('AuthService intitialized');
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
      } else {
        this.uid = null;
      }
    });
  }

  getUser(): Observable<User | null> {
    return this.afAuth.user;
  }

  signInWithGooglePopup(): Promise<auth.UserCredential> {
    const redirectUrl = this.redirectUrl;
    const router = this.router;
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(userCredential) {
      if (redirectUrl) {
        router.navigate([redirectUrl]);
      }
      return userCredential;
    });
  }

  signOut() {
    const router = this.router;
    return this.afAuth.auth.signOut().then(function() {
      router.navigate(['/auth']);
    });
  }
}
