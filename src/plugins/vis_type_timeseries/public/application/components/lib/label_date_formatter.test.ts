/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import moment from 'moment-timezone';
import { labelDateFormatter } from './label_date_formatter';

const dateString = '2020-09-24T18:59:02.000Z';

describe('Label Date Formatter Function', () => {
  it('Should format the date string', () => {
    const label = labelDateFormatter(dateString);
    expect(label).toEqual(moment(dateString).format('lll'));
  });

  it('Should format the date string on the given formatter', () => {
    const label = labelDateFormatter(dateString, 'MM/DD/YYYY');
    expect(label).toEqual(moment(dateString).format('MM/DD/YYYY'));
  });

  it('Returns the label if it is not date string', () => {
    const label = labelDateFormatter('test date');
    expect(label).toEqual('test date');
  });

  it('Returns the label if it is a number string', () => {
    const label = labelDateFormatter('1');
    expect(label).toEqual('1');
  });
});
