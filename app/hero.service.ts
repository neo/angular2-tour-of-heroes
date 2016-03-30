import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	// https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#!#slow
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 2000)
		);
	}
}
