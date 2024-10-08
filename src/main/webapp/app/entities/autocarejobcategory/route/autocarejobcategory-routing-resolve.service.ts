import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IAutocarejobcategory } from '../autocarejobcategory.model';
import { AutocarejobcategoryService } from '../service/autocarejobcategory.service';

const autocarejobcategoryResolve = (route: ActivatedRouteSnapshot): Observable<null | IAutocarejobcategory> => {
  const id = route.params['id'];
  if (id) {
    return inject(AutocarejobcategoryService)
      .find(id)
      .pipe(
        mergeMap((autocarejobcategory: HttpResponse<IAutocarejobcategory>) => {
          if (autocarejobcategory.body) {
            return of(autocarejobcategory.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default autocarejobcategoryResolve;
