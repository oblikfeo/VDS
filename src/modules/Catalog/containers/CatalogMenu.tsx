'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, List, ListItem } from '../../../ui/components';
import { Col, Container, Row } from '../../../ui/components/Adaptive';
import { Typography } from '../../../ui/components/Typography';
import { useMediaQuery } from '../../../ui/hooks/useMediaQuery';
import { ChevronLeft, CatalogArrow } from '../../../ui/icons';
import { CatalogMenuSkeleton } from '../components';
import { useCategories } from '../hooks';
import { CategoryMap } from '../types';

type Props = {
  closeMenu: () => void;
};

const StyledCatalogMenu = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const CatalogMenuBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  background: linear-gradient(135.00deg, rgba(255, 255, 255, 0.8) 20.201%,rgba(255, 255, 255, 0.3) 81.793%);
`;

const CatalogMenuColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const CatalogMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const CatalogMenuHeaderInfo = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 38% 1fr;
  column-gap: 20px;
`;

const CatalogMenuHeaderText = styled.span`
  ${({ theme }) => theme.typography.big4}
  color: ${({ theme }) => theme.color.text.primary};
`;

const CatalogMenuLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.background.secondary};
`;

const CatalogMenuColumns = styled.div`
  display: flex;
  column-gap: 20px;
`;

const CatalogMenuColumn = styled.div<{ absolute?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
  top: 0;
  left: 0;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: unset;
  }

  ::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: ${({ theme }) => theme.color.scroll.menu};
    border-radius: 10px;
    border: none;
  }
`;

const CatalogMenuColumnLeft = styled.div`
  display: flex;
  width: 100%;
  max-width: 38%;
  border-right: 1px solid ${({ theme }) => theme.color.background.secondary};
`;

const CatalogMenuColumnRight = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`;

const CatalogArrowWrapper = styled.div<{active?: boolean}>`
  display: flex;
  width: ${({ active }) => (active ? '24px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  margin-right: ${({ active }) => (active ? '10px' : '0')};
  transition: 0.2s ease;
`;

const renderSecondaryCategory = (
  onCLick: (category: CategoryMap) => void,
  isMobileOrTablet: boolean,
  currentCategory?: CategoryMap,
) => {
  if (isMobileOrTablet)
    return (
      <CatalogMenuColumn absolute>
        {currentCategory?.list.map((category) => (
          <ListItem key={category.id} onClick={() => onCLick(category)}>
            {category.name}
          </ListItem>
        ))}
      </CatalogMenuColumn>
    );

  return (
    <CatalogMenuColumn absolute>
      {currentCategory?.list.map((parentCategory) => (
        <ListItem key={parentCategory.id} onClick={() => onCLick(parentCategory)}>
          {parentCategory.name}
        </ListItem>
      ))}
    </CatalogMenuColumn>
  );
};

export const CatalogMenu = ({ closeMenu }: Props) => {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState<CategoryMap>();
  const { isLoading, map } = useCategories();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 'tablet' });

  useEffect(() => {
    if (map && !isMobileOrTablet) setCurrentCategory(map[0]);
  }, [isMobileOrTablet, map]);

  const navigateToCategory = (category: CategoryMap) => {
    router.push(`/catalog/${category.id}/1`);
    closeMenu();
  };

  const onClickFinalCategoryHandler = (category: CategoryMap) => {
    navigateToCategory(category);
  };

  const onClickPrimaryCategory = (category: CategoryMap) => {
    if (category.list.length) {
      setCurrentCategory(category);
      return;
    }

    navigateToCategory(category);
  };

  if (isLoading) return <CatalogMenuSkeleton />;

  return (
    <>
      {isMobileOrTablet && (
        <Button.Text icon={ChevronLeft} onClick={() => (currentCategory ? setCurrentCategory(undefined) : closeMenu())}>
          Назад
        </Button.Text>
      )}
      <StyledCatalogMenu>
        <CatalogMenuBackground/>
        <CatalogMenuColumnsWrapper>
          <CatalogMenuHeader>
            <CatalogMenuHeaderInfo>
              <CatalogMenuHeaderText>Каталог</CatalogMenuHeaderText>
              <CatalogMenuHeaderText>{currentCategory?.name}</CatalogMenuHeaderText>
            </CatalogMenuHeaderInfo>
            <CatalogMenuLine/>
          </CatalogMenuHeader>
          <CatalogMenuColumns>
            {(!isMobileOrTablet || !currentCategory) && (
              <CatalogMenuColumnLeft>
                <CatalogMenuColumn>
                  {map?.map((category) => (
                    <ListItem
                      key={category.id}
                      onClick={() => onClickPrimaryCategory(category)}
                      active={category.id === currentCategory?.id}
                    >
                      <CatalogArrowWrapper active={category.id === currentCategory?.id}>
                        <CatalogArrow/>
                      </CatalogArrowWrapper>
                      {category.name}
                    </ListItem>
                  ))}
                </CatalogMenuColumn>
              </CatalogMenuColumnLeft>
            )}
            <CatalogMenuColumnRight>
              {renderSecondaryCategory(onClickFinalCategoryHandler, isMobileOrTablet, currentCategory)}
            </CatalogMenuColumnRight>
          </CatalogMenuColumns>
        </CatalogMenuColumnsWrapper>
      </StyledCatalogMenu>
    </>
  );
};
