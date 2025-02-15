'use client';
import React from 'react';
import Button from '@/components/design-system/Button';
import ButtonUsage from '@/example/ButtonUsage';
import Main from '@/components/Main';
import Container from '@/components/Container';

export default function DocsPage() {
  return (
    <Main>
      <Container>
        <ButtonUsage />
      </Container>
    </Main>
  );
}
