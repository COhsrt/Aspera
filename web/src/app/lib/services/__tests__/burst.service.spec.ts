import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {BurstService} from '../burst.service';
import {I18nService} from '../../i18n/i18n.service';
import {StoreService} from '../store.service';

jest.mock('../store.service');
jest.mock('../../i18n/i18n.service');

describe('BurstService', () => {

    beforeEach(() => {

        I18nService.mockClear();
        StoreService.mockClear();

        StoreService.mockImplementation(() => {
            return {
                settings: {
                    subscribe : jest.fn()
                },
            };
        });

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                BurstService,
                I18nService,
                StoreService,
            ]
        });
    });

    it('should be created', inject([BurstService], (service: BurstService) => {
        expect(service).toBeTruthy();
    }));
});
