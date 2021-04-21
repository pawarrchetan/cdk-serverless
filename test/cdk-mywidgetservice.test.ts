import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

import * as CdkMywidgetservice from '../lib/widget_service';

test('Resources Snapshot Created Successfully', () => {
  const stack = new Stack();
  new CdkMywidgetservice.WidgetService(stack, 'MyTestStack');

  // Snapshot Test
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('Stack creates a S3 Bucket', () => {
  const stack = new Stack();

  new CdkMywidgetservice.WidgetService(stack, 'MyTestStack');

  expect(stack).toHaveResource('AWS::S3::Bucket');
});

test('Stack creates an API Gateway', () => {
  const stack = new Stack();

  new CdkMywidgetservice.WidgetService(stack, 'MyTestStack');

  expect(stack).toHaveResource('AWS::ApiGateway::RestApi');
});

test('Stack creates a Lambda', () => {
  const stack = new Stack();

  new CdkMywidgetservice.WidgetService(stack, 'MyTestStack');
  
  expect(stack).toHaveResource('AWS::Lambda::Function');
});